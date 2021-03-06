import React, { useEffect, useState } from "react";
import SyntaxHighlighter from 'react-native-syntax-highlighter';
/*by default component uses hljs so access hljs styles, import from /prism for prism styles */
import { atomOneDark } from 'react-syntax-highlighter/styles/hljs';
const CodeHighlighter = ({code, language}) => {
  return <SyntaxHighlighter 
  	language={language} 
	style={atomOneDark}
  	highlighter={"hljs"}>
  	{code}
  </SyntaxHighlighter>;  
}

export default CodeHighlighter