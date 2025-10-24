import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { join } from 'path';
import { load as yamlLoad } from 'js-yaml';

describe('Datadog Synthetics Workflow', () => {
  let workflowContent: string;
  let workflow: any;
  const workflowPath = join(process.cwd(), '.github/workflows/datadog-synthetics.yml');

  beforeAll(() => {
    workflowContent = readFileSync(workflowPath, 'utf-8');
    workflow = yamlLoad(workflowContent);
  });

  describe('YAML Structure Validation', () => {
    it('should be valid YAML', () => {
      expect(() => yamlLoad(workflowContent)).not.toThrow();
    });

    it('should parse into a non-null object', () => {
      expect(workflow).toBeDefined();
      expect(workflow).not.toBeNull();
      expect(typeof workflow).toBe('object');
    });
  });

  describe('Workflow Metadata', () => {
    it('should have a name property', () => {
      expect(workflow).toHaveProperty('name');
      expect(typeof workflow.name).toBe('string');
      expect(workflow.name.length).toBeGreaterThan(0);
    });

    it('should have a descriptive name', () => {
      expect(workflow.name).toBe('Run Datadog Synthetic tests');
    });
  });

  describe('Workflow Triggers', () => {
    it('should have an "on" property defining triggers', () => {
      expect(workflow).toHaveProperty('on');
      expect(typeof workflow.on).toBe('object');
    });

    it('should trigger on push events', () => {
      expect(workflow.on).toHaveProperty('push');
    });

    it('should trigger on pull_request events', () => {
      expect(workflow.on).toHaveProperty('pull_request');
    });

    it('should have push trigger configured for main branch', () => {
      expect(workflow.on.push).toHaveProperty('branches');
      expect(Array.isArray(workflow.on.push.branches)).toBe(true);
      expect(workflow.on.push.branches).toContain('main');
    });

    it('should have pull_request trigger configured for main branch', () => {
      expect(workflow.on.pull_request).toHaveProperty('branches');
      expect(Array.isArray(workflow.on.pull_request.branches)).toBe(true);
      expect(workflow.on.pull_request.branches).toContain('main');
    });

    it('should only target main branch for both triggers', () => {
      expect(workflow.on.push.branches).toEqual(['main']);
      expect(workflow.on.pull_request.branches).toEqual(['main']);
    });
  });

  describe('Jobs Configuration', () => {
    it('should have a jobs property', () => {
      expect(workflow).toHaveProperty('jobs');
      expect(typeof workflow.jobs).toBe('object');
    });

    it('should have at least one job defined', () => {
      expect(Object.keys(workflow.jobs).length).toBeGreaterThan(0);
    });

    it('should have a "build" job', () => {
      expect(workflow.jobs).toHaveProperty('build');
    });
  });

  describe('Build Job Configuration', () => {
    it('should specify a runs-on property', () => {
      expect(workflow.jobs.build).toHaveProperty('runs-on');
      expect(typeof workflow.jobs.build['runs-on']).toBe('string');
    });

    it('should run on ubuntu-latest', () => {
      expect(workflow.jobs.build['runs-on']).toBe('ubuntu-latest');
    });

    it('should have steps defined', () => {
      expect(workflow.jobs.build).toHaveProperty('steps');
      expect(Array.isArray(workflow.jobs.build.steps)).toBe(true);
    });

    it('should have at least 2 steps', () => {
      expect(workflow.jobs.build.steps.length).toBeGreaterThanOrEqual(2);
    });
  });

  describe('Checkout Step', () => {
    let checkoutStep: any;

    beforeAll(() => {
      checkoutStep = workflow.jobs.build.steps.find(
        (step: any) => step.uses?.startsWith('actions/checkout')
      );
    });

    it('should include a checkout action', () => {
      expect(checkoutStep).toBeDefined();
    });

    it('should use actions/checkout@v4', () => {
      expect(checkoutStep.uses).toBe('actions/checkout@v4');
    });

    it('should be the first step', () => {
      expect(workflow.jobs.build.steps[0].uses).toMatch(/^actions\/checkout/);
    });
  });

  describe('Datadog Synthetics Step', () => {
    let datadogStep: any;

    beforeAll(() => {
      datadogStep = workflow.jobs.build.steps.find(
        (step: any) => step.uses?.includes('DataDog/synthetics-ci-github-action')
      );
    });

    it('should include Datadog Synthetics action', () => {
      expect(datadogStep).toBeDefined();
    });

    it('should have a descriptive name', () => {
      expect(datadogStep).toHaveProperty('name');
      expect(datadogStep.name).toBe('Run Datadog Synthetic tests');
    });

    it('should use a pinned version of the action', () => {
      expect(datadogStep.uses).toContain('@');
      // Should have commit SHA
      expect(datadogStep.uses).toMatch(/@[a-f0-9]{40}/);
    });

    it('should use the correct pinned version with comment', () => {
      expect(datadogStep.uses).toBe(
        'DataDog/synthetics-ci-github-action@87b505388a22005bb8013481e3f73a367b9a53eb'
      );
      // The comment should indicate v1.4.0
    });

    it('should have with configuration', () => {
      expect(datadogStep).toHaveProperty('with');
      expect(typeof datadogStep.with).toBe('object');
    });
  });

  describe('Datadog Action Configuration', () => {
    let datadogStep: any;

    beforeAll(() => {
      datadogStep = workflow.jobs.build.steps.find(
        (step: any) => step.uses?.includes('DataDog/synthetics-ci-github-action')
      );
    });

    it('should configure api_key from secrets', () => {
      expect(datadogStep.with).toHaveProperty('api_key');
    });

    it('should configure app_key from secrets', () => {
      expect(datadogStep.with).toHaveProperty('app_key');
    });

    it('should configure test_search_query', () => {
      expect(datadogStep.with).toHaveProperty('test_search_query');
    });

    it('should use GitHub secrets for api_key', () => {
      expect(datadogStep.with.api_key).toMatch(/\$\{\{.*secrets\.DD_API_KEY.*\}\}/);
    });

    it('should use GitHub secrets for app_key', () => {
      expect(datadogStep.with.app_key).toMatch(/\$\{\{.*secrets\.DD_APP_KEY.*\}\}/);
    });

    it('should have a valid test_search_query format', () => {
      expect(datadogStep.with.test_search_query).toBeTruthy();
      expect(typeof datadogStep.with.test_search_query).toBe('string');
    });

    it('should use tag-based search query', () => {
      expect(datadogStep.with.test_search_query).toMatch(/tag:/);
    });

    it('should specify e2e-tests tag', () => {
      expect(datadogStep.with.test_search_query).toBe('tag:e2e-tests');
    });
  });

  describe('Security Best Practices', () => {
    let datadogStep: any;

    beforeAll(() => {
      datadogStep = workflow.jobs.build.steps.find(
        (step: any) => step.uses?.includes('DataDog/synthetics-ci-github-action')
      );
    });

    it('should not expose secrets in plain text', () => {
      expect(workflowContent).not.toMatch(/DD_API_KEY.*:.*[a-zA-Z0-9]{20,}/);
      expect(workflowContent).not.toMatch(/DD_APP_KEY.*:.*[a-zA-Z0-9]{20,}/);
    });

    it('should use secrets syntax for sensitive data', () => {
      const secretsUsage = workflowContent.match(/\$\{\{secrets\.\w+\}\}/g);
      expect(secretsUsage).toBeTruthy();
      expect(secretsUsage?.length).toBeGreaterThanOrEqual(2);
    });

    it('should pin actions to full commit SHA', () => {
      const actions = workflow.jobs.build.steps
        .filter((step: any) => step.uses)
        .map((step: any) => step.uses);

      actions.forEach((action: string) => {
        if (action.includes('DataDog/synthetics-ci-github-action')) {
          // Should be pinned to commit SHA
          expect(action).toMatch(/@[a-f0-9]{40}/);
        }
      });
    });

    it('should not contain hardcoded credentials', () => {
      expect(workflowContent.toLowerCase()).not.toMatch(/password\s*:\s*['"][^'"]+['"]/);
      expect(workflowContent.toLowerCase()).not.toMatch(/token\s*:\s*['"][^'"]+['"]/);
      expect(workflowContent.toLowerCase()).not.toMatch(/api[_-]?key\s*:\s*['"][^'"]+['"]/);
    });
  });

  describe('Workflow Comments and Documentation', () => {
    it('should contain documentation comments', () => {
      expect(workflowContent).toMatch(/#.*Datadog/);
    });

    it('should contain reference to documentation', () => {
      expect(workflowContent).toMatch(/docs\.datadoghq\.com/);
    });

    it('should contain setup instructions', () => {
      expect(workflowContent).toMatch(/#.*Add your Datadog API/);
    });

    it('should warn about third-party actions', () => {
      expect(workflowContent).toMatch(/not certified by GitHub/);
    });
  });

  describe('Edge Cases and Validation', () => {
    it('should not have empty job names', () => {
      Object.keys(workflow.jobs).forEach((jobName) => {
        expect(jobName.trim().length).toBeGreaterThan(0);
      });
    });

    it('should not have steps without actions or run commands', () => {
      workflow.jobs.build.steps.forEach((step: any) => {
        const hasUses = step.uses !== undefined;
        const hasRun = step.run !== undefined;
        expect(hasUses || hasRun).toBe(true);
      });
    });

    it('should have valid step structure', () => {
      workflow.jobs.build.steps.forEach((step: any) => {
        expect(typeof step).toBe('object');
        expect(step).not.toBeNull();
      });
    });

    it('should not have duplicate step names', () => {
      const stepNames = workflow.jobs.build.steps
        .filter((step: any) => step.name)
        .map((step: any) => step.name);

      const uniqueNames = new Set(stepNames);
      expect(stepNames.length).toBe(uniqueNames.size);
    });
  });

  describe('Workflow File Format', () => {
    it('should use consistent indentation', () => {
      const lines = workflowContent.split('\n').filter((line) => line.trim().length > 0);
      const indentedLines = lines.filter((line) => line.startsWith(' '));

      indentedLines.forEach((line) => {
        const leadingSpaces = line.match(/^ */)?.[0].length || 0;
        // Should be multiple of 2 (standard YAML indentation)
        expect(leadingSpaces % 2).toBe(0);
      });
    });

    it('should not have trailing whitespace', () => {
      const lines = workflowContent.split('\n');
      lines.forEach((line) => {
        if (line.length > 0) {
          expect(line).toBe(line.trimEnd());
        }
      });
    });

    it('should end with newline', () => {
      expect(workflowContent.endsWith('\n')).toBe(true);
    });
  });

  describe('Configuration Flexibility', () => {
    it('should allow customization of test_search_query', () => {
      const datadogStep = workflow.jobs.build.steps.find(
        (step: any) => step.uses?.includes('DataDog/synthetics-ci-github-action')
      );

      // The comment indicates this can be modified
      expect(workflowContent).toMatch(/#.*Modify this tag/);
      expect(datadogStep.with.test_search_query).toBeTruthy();
    });

    it('should document configuration options', () => {
      expect(workflowContent).toMatch(/For additional configuration options/);
      expect(workflowContent).toMatch(/marketplace/);
    });
  });

  describe('Action Version Compatibility', () => {
    it('should use a stable version of checkout action', () => {
      const checkoutStep = workflow.jobs.build.steps[0];
      expect(checkoutStep.uses).toMatch(/actions\/checkout@v[0-9]+/);
    });

    it('should use DataDog action v1.4.0 (via commit SHA)', () => {
      // The comment indicates v1.4.0
      expect(workflowContent).toMatch(/#.*v1\.4\.0/);
    });
  });

  describe('Workflow Execution Context', () => {
    it('should be executable on GitHub Actions', () => {
      expect(workflow.jobs.build['runs-on']).toBe('ubuntu-latest');
      expect(workflow.on).toBeDefined();
      expect(workflow.jobs).toBeDefined();
    });

    it('should have proper branching strategy', () => {
      const branches = workflow.on.push.branches;
      expect(branches).toContain('main');
      expect(branches.length).toBe(1);
    });

    it('should run on both push and PR for code quality', () => {
      expect(workflow.on.push).toBeDefined();
      expect(workflow.on.pull_request).toBeDefined();
    });
  });

  describe('Error Handling and Resilience', () => {
    it('should not have malformed secret references', () => {
      const secretRefs = workflowContent.match(/\$\{\{.*\}\}/g) || [];
      secretRefs.forEach((ref) => {
        // Should have balanced braces
        expect(ref.match(/\{/g)?.length).toBe(ref.match(/\}/g)?.length);
        // Should not have spaces around secrets
        expect(ref).not.toMatch(/\{\{\s*secrets/);
        expect(ref).not.toMatch(/\}\}\s*$/);
      });
    });

    it('should have valid action references', () => {
      workflow.jobs.build.steps.forEach((step: any) => {
        if (step.uses) {
          expect(step.uses).toMatch(/^[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+@.+$/);
        }
      });
    });
  });

  describe('Integration Test Scenarios', () => {
    it('should support running tests against e2e-tests tag', () => {
      const datadogStep = workflow.jobs.build.steps.find(
        (step: any) => step.uses?.includes('DataDog/synthetics-ci-github-action')
      );
      expect(datadogStep.with.test_search_query).toMatch(/e2e-tests/);
    });

    it('should allow different tag configurations', () => {
      // The workflow should be flexible for different tags
      expect(workflowContent).toMatch(/#.*tag to suit your tagging strategy/);
    });
  });

  describe('Maintenance and Documentation', () => {
    it('should reference official Datadog documentation', () => {
      expect(workflowContent).toMatch(/docs\.datadoghq\.com\/synthetics/);
    });

    it('should provide setup instructions', () => {
      expect(workflowContent).toMatch(/To get started:/);
      expect(workflowContent).toMatch(/Add your Datadog API/);
    });

    it('should warn about third-party nature', () => {
      expect(workflowContent).toMatch(/not certified by GitHub/);
      expect(workflowContent).toMatch(/third-party/);
    });
  });
});