function wrapTags(str,tag)
{
     var res = ""
     return res += `<${tag}> ${str} </${tag}>`
}
 var res = wrapTags("Do not give up, the beginning is always the hardest", "mark")
console.log(res) 
