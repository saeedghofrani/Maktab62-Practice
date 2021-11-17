function alphabet_order(str)
{
return str.split('').sort((b, a) => b.toLowerCase().charCodeAt(0) - a.toLowerCase().charCodeAt(0)).join('');
}
console.log(alphabet_order("webmaster"));