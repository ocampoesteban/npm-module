/*
* Function in charge of convert str provider in a ASCII list
* @param {str} which is going to be converted to ASCII
* @return ASCII list
*/
export function converStringToASCII(str: string=""): string {
  return str.split('').map((a:string) => a.charCodeAt(0)).join(' ');
}