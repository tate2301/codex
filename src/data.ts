export const data = {
    lessons: [
        {

        }
    ],
    "exercises": [
        {
            id: 0,
            question: `
#### C
### Hello World
This is an introductory question, you are required to re-order the
code blocks in as few steps as possible. The result should be such
that the code prints 
Hello World
            `,
            tiles: {
                blocks: [
                    {
                    id: "header",
                    code: "#include<stdio.h>",
                    language: "c",
                    },
                
                    {
                    id: "main_declaration",
                    code: "int main() {",
                    language: "c",
                    },
                    {
                    id: "print_block",
                    code: "\t\tprintf('Hello World');",
                    language: "c",
                    },
                    {
                    id: "return_block",
                    code: "\t\treturn 0;",
                    language: "c",
                    },
                    {
                    id: "closing_bracket",
                    code: "}",
                    language: "c",
                    },
                ]
            },
            finalKeys : {
                "header": 0,
                "main_declaration": 1,
                "print_block": 2,
                "return_block": 3,
                "closing_bracket": 4
            }
        },
        {
            id:1,
            question: `
#### PYTHON
## Two Sums
Given an array of integers, return indices of the two numbers
such that they add up to a specific target.
            `,
            tiles: {
                blocks: [
                    {
                    id: "class_def",
                    code: "class Solution (object):",
                    language: "python",
                    },
                    {
                    id: "function_def",
                    code: "\tdef twoSum(self, nums, target):",
                    language: "python",
                    },
                    {
                    id: "for_loop_1",
                    code: "\t\tfor i, num1 in enumerate(nums):",
                    language: "python",
                    },
                    {
                    id: "if_block",
                    code: "\t\t\tif nums [i] + nums[j] == target:",
                    language: "python",
                    },
                    {
                    id: "for_loop_2",
                    code: "\t\t\t\tfor j in range(i + 1, len(nums)):",
                    language: "python",
                    },
                    {
                    id: "return_block",
                    code: "\t\t\t\treturn [i, j]",
                    language: "python",
                    },
                    
                ]
            },
            finalKeys : {
                "class_def": 0,
                "function_def": 1,
                "for_loop_1": 2,
                "if_block": 3,
                "for_loop_2": 4,
                "return_block": 5
            }
        }
    ]
}