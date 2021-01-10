import React from 'react';
import { StyleSheet, View } from 'react-native';
import LessonContent from './components/Content';

const copy = `
\`\`\` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\`
`;

const LessonScreen = () => {
    return (
        <View>
            <LessonContent lessonMarkdown={copy} />
        </View>
    )
}

export default LessonScreen