# Enhanced Grep

## Section 1 — Command Description

My tool is called `enhancedGrep`.

It searches through a text file for a word and prints every line that contains that word. It also counts how many matching lines were found.

This tool combines a simplified version of the Linux `grep` command with a simplified version of `wc`.

### How to run it

```bash
node enhancedGrep.js <word> <filename>
```

Example:

```bash
node enhancedGrep.js apple sample.txt
```

The program shows the matching lines and then displays the number of matches.

## Section 2 — AI-Assisted Programming

I used AI to help me understand how `grep`, `wc`, `process.argv`, and file reading work in Node.js.

AI also helped me think of test cases and edge cases, such as searching for a word that is not in the file, using a missing file, and forgetting command-line arguments.

I still had to test the program myself, fix filename problems, create the sample text file, and check that the output worked correctly.

One thing AI missed at first was that the word `apple` would also match the word `apples` because the program uses `.includes()`. I noticed this while testing and corrected the expected match count.
