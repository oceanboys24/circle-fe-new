export default function convertToWIB(isoString: string) {
  const date = new Date(isoString);
  date.setHours(date.getHours() + 7); // Tambah 7 jam ke UTC
  return date.toISOString().replace("T", " ").substring(0, 19);
}
