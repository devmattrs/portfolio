---
title: "Automating Release Notes with LLMs and GitHub Data"
date: "2024-03-05"
description: "How we built an AI-powered system to automate release note generation using Git history and OpenAI"
tags: ["data", "openai", "github"]
---

# Automating Release Notes with LLMs

One of our most impactful internal tools has been an LLM-powered system that automatically generates comprehensive release notes by analyzing git commits, pull requests, and ticket data. Here's how we built it.

## The Problem

Manual release note generation was:
- Time-consuming (2-3 hours per release)
- Inconsistent in format and detail
- Often missing important changes
- Delayed due to human bottlenecks

## The Solution

We created a system that:
1. Aggregates data from multiple sources
2. Uses LLMs to understand and categorize changes
3. Generates human-readable summaries
4. Maintains consistent formatting

## Technical Implementation

```python
from github import Github
from openai import OpenAI

class ReleaseNoteGenerator:
    def __init__(self):
        self.gh = Github(token)
        self.openai = OpenAI()
        
    async def generate_notes(self, repo_name: str, from_tag: str, to_tag: str) -> str:
        # Get commits and PRs
        repo = self.gh.get_repo(repo_name)
        commits = repo.compare(from_tag, to_tag).commits
        prs = [pr for pr in repo.get_pulls(state='closed')]
        
        # Analyze changes
        changes = await self.analyze_changes(commits, prs)
        
        # Generate formatted notes
        return await self.format_notes(changes)
        
    async def analyze_changes(self, commits, prs):
        # Combine commit messages and PR descriptions
        content = self.prepare_content(commits, prs)
        
        response = await self.openai.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": """
                    Analyze these changes and categorize them into:
                    - Features
                    - Bug Fixes
                    - Performance Improvements
                    - Breaking Changes
                """},
                {"role": "user", "content": content}
            ]
        )
        
        return response.choices[0].message.content

    def prepare_content(self, commits, prs):
        # Combine and format git data
        return "\n".join([
            f"Commit: {c.commit.message}" for c in commits
        ] + [
            f"PR: {pr.title}\n{pr.body}" for pr in prs
        ])
```

## Results

The automated system achieved:
- 95% reduction in time spent on release notes
- More consistent and comprehensive documentation
- Better tracking of breaking changes
- Immediate generation post-release

## Best Practices

1. **Clean Commit Messages**
   - Use conventional commit format
   - Reference tickets and PRs
   - Include context for changes

2. **PR Templates**
   - Structured sections for changes
   - Breaking change warnings
   - Migration instructions

3. **LLM Prompting**
   - Clear categorization rules
   - Consistent formatting
   - Technical accuracy checks