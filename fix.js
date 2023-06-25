const { "sync": markdownlintSync } = require("markdownlint");
const markdownlintRuleHelpers = require("markdownlint-rule-helpers");

function fixMarkdownlintViolations(content) {
  const fixResults = markdownlintSync({ strings: { content } });
  return markdownlintRuleHelpers.applyFixes(content, fixResults.content);
}
