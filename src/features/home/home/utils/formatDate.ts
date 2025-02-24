export default function FormatDate(isoDate: string) {
  const localDate = new Date(isoDate).toLocaleString("id-ID", {
    timeZone: "Asia/Jakarta",
  });
  return localDate;
}
