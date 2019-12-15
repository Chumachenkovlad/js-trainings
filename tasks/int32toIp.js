function int32ToIp(int32) {
  const raw16bNum = int32.toString(16);
  const zerosToAdd = 9 - raw16bNum.length;
  const full16bNum = raw16bNum.padStart(zerosToAdd, "0");
  const [, ...rest] = full16bNum.match(/(..)(..)(..)(..)/);
  return rest.map(s => parseInt(s, 16)).join(".");
}

console.log(int32ToIp(2154959208));
console.log(int32ToIp(0));
console.log(int32ToIp(10));
