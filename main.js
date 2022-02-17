function wrapTags(str, tag) 
{
     var result = "";
     return result += `<${tag}> ${str} </${tag}>`;
}
var res = wrapTags("Do not give up, the beginning is always the hardest", "mark");

console.log(res);
