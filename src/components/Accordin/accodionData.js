import {
  //FaAngleDown,
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaVuejs,
} from "react-icons/fa";

const items = [
  {
    id: "1",
    icon1: <FaHtml5 />,
    //icon2: <FaAngleDown />,
    title: "HTML5",
    info: `The HTML 5 language has a "custom" HTML syntax that is compatible with HTML 4 and XHTML1 documents published on the Web, but is not compatible with the more esoteric SGML features of HTML 4.
      HTML 5 does not have the same syntax rules as XHTML where we needed lower case tag names, quoting our attributes, an attribute had to have a value and to close all empty elements.
      HTML5 comes with a lot of flexibility and it supports the following features −
      Uppercase tag names.
      Quotes are optional for attributes.
      Attribute values are optional.
      Closing empty elements are optional.
      The DOCTYPE
      DOCTYPEs in older versions of HTML were longer because the HTML language was SGML based and therefore required a reference to a DTD.
      HTML 5 authors would use simple syntax to specify DOCTYPE as follows −
      <!DOCTYPE html>
      The above syntax is case-insensitive.
      Character Encoding
      HTML 5 authors can use simple syntax to specify Character Encoding as follows −
      
      <meta charset = "UTF-8">
      The above syntax is case-insensitive.
      
      The <script> tag
      It's common practice to add a type attribute with a value of "text/javascript" to script elements as follows −
      
      <script type = "text/javascript" src = "scriptfile.js"></script> 
      HTML 5 removes extra information required and you can use simply following syntax `,
  },
  {
    id: "2",
    icon1: <FaCss3 />,
    //icon2: <FaAngleDown />,
    title: "CSS3",
    info: "CSS stands for Cascading Style Sheets. CSS is a standard style sheet language used for describing the presentation (i.e. the layout and formatting) of the web pages.Prior to CSS, nearly all of the presentational attributes of HTML documents were contained within the HTML markup (specifically inside the HTML tags); all the font colors, background styles, element alignments, borders and sizes had to be explicitly described within the HTML.As a result, development of the large websites became a long and expensive process, since the style information were repeatedly added to every single page of the website.To solve this problem CSS was introduced in 1996 by the World Wide Web Consortium (W3C) which also maintains its standard. CSS was designed to enable the separation of presentation and content. Now web designers can move the formatting information of the web pages to a separate style sheet which results in considerably simpler HTML markup, and better maintainability. CSS3 is the latest version of the CSS specification. CSS3 adds several new styling features and improvements to enhance the web presentation capabilities. ",
  },
  {
    id: "3",
    icon1: <FaJs />,
    //icon2: <FaAngleDown />,
    title: "JAVASCRIPT",
    info: "JavaScript is the most popular and widely used client-side scripting language. Client-side scripting refers to scripts that run within your web browser. JavaScript is designed to add interactivity and dynamic effects to the web pages by manipulating the content returned from a web server.JavaScript was originally developed as LiveScript by Netscape in the mid 1990s. It was later renamed to JavaScript in 1995, and became an ECMA standard in 1997. Now JavaScript is the standard client-side scripting language for web-based applications, and it is supported by virtually all web browsers available today, such as Google Chrome, Mozilla Firefox, Apple Safari, etc.JavaScript is an object-oriented language, and it also has some similarities in syntax to Java programming language. But, JavaScript is not related to Java in any way.JavaScript is officially maintained by ECMA (European Computer Manufacturers Association) as ECMAScript. ECMAScript 6 (or ES6) is the latest major version of the ECMAScript standard. ",
  },
  {
    id: " 4",
    icon1: <FaReact />,
    //icon2: <FaAngleDown />,
    title: "REACT",
    info: "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications",
  },
  {
    id: "5",
    icon1: <FaVuejs />,
    //icon2: <FaAngleDown />,
    title: "VUE",
    info: " Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members. Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members. ?",
  },
];

export default items;
