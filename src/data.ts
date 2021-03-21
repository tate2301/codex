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
    ]
}