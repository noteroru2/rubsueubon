export function serviceTopic(slug = '', category = ''): string {
  const s = `${slug} ${category}`.toLowerCase();
  if (/lot|corporate|office|school|cafe|b2b|ยกล็อต/.test(s)) return 'b2b';
  if (/macbook|imac|apple-อุบล|macbook-ubon/.test(s)) return 'macbook';
  if (/ipad|tablet|แท็บเล็ต/.test(s)) return 'tablet';
  if (/iphone|smartphone|samsung|oppo|vivo(?!book)|xiaomi|realme|redmi|poco|มือถือ|โทรศัพท์/.test(s)) return 'phone';
  if (/camera|กล้อง|lens|เลนส์|insta360|gopro|drone|dji/.test(s)) return 'camera';
  if (/notebook|โน้ต|laptop|vivobook|thinkpad|latitude|nitro|legion|victus|katana|lenovo-loq|asus-rog|asus-tuf/.test(s)) return 'notebook';
  if (/pc|computer|คอม|gpu|rtx|radeon|parts|อะไหล่|การ์ดจอ/.test(s)) return 'pc';
  if (/console|เครื่องเกม|ps5|playstation|switch|steam|xbox|rog-ally/.test(s)) return 'console';
  if (/watch|นาฬิกา/.test(s)) return 'watch';
  if (/speaker|audio|เครื่องเสียง|ลำโพง/.test(s)) return 'audio';
  if (/tv|ทีวี|appliance/.test(s)) return 'tv';
  if (/trade|เทิร์น/.test(s)) return 'trade';
  return 'other';
}
