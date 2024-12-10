export const pdfRoutes = [
    {day:10, month:12, path:"/files/mensaje10.pdf", music:"1fzAuUVbzlhZ1lJAx9PtY6"},
    {day:11, month:12, path:"/files/mensaje11.pdf", music:"00kIWJu9IHiQ6i0qJAU0Z9"},
    {day:12, month:12, path:"/files/mensaje12.pdf", music:"3W5h65cRwTaZ1FCvEw6Ltx"},
    {day:13, month:12, path:"/files/mensaje13.pdf", music:"4y5bvROuBDPr5fuwXbIBZR"},
    {day:14, month:12, path:"/files/mensaje14.pdf", music:"1dGr1c8CrMLDpV6mPbImSI"},
    {day:15, month:12, path:"/files/mensaje15.pdf", music:"7HuBDWi18s4aJM8UFnNheH"},
    {day:16, month:12, path:"/files/mensaje16.pdf", music:"1dGr1c8CrMLDpV6mPbImSI"},
    {day:17, month:12, path:"/files/mensaje17.pdf", music:"5XeFesFbtLpXzIVDNQP22n"},
    {day:18, month:12, path:"/files/mensaje18.pdf", music:"7oDd86yk8itslrA9HRP2ki"},
    {day:19, month:12, path:"/files/mensaje19.pdf", music:"7KvX1d2BMXXLXt3Kuq5atu"},
    {day:20, month:12, path:"/files/mensaje20.pdf", music:"2Z5wXgysowvzl0nKGNGU0t"},
    {day:21, month:12, path:"/files/mensaje21.pdf", music:"2j3e0rTUgHviwh8XpQCzLN"},
    {day:22, month:12, path:"/files/mensaje22.pdf", music:"5W10CyNhnCoIxUYfANwZqR"},
    {day:23, month:12, path:"/files/mensaje23.pdf", music:"6CDzDgIUqeDY5g8ujExx2f"},
    {day:24, month:12, path:"/files/mensaje24.pdf", music:"4vkGubn53O4ulKG2fwDRaG"},
    {day:25, month:12, path:"/files/mensaje25.pdf", music:"49gRYU6hBWgSH2JVixGkJq"},
    {day:26, month:12, path:"/files/mensaje26.pdf", music:"12M5uqx0ZuwkpLp5rJim1a"},
    {day:27, month:12, path:"/files/mensaje27.pdf", music:"2plbrEY59IikOBgBGLjaoe"},
    {day:28, month:12, path:"/files/mensaje28.pdf", music:"1VB4sadHjFcFklHcZuoROi"},
    {day:29, month:12, path:"/files/mensaje29.pdf", music:"37CoOXIsgF3NzbK1zHZetk"},
    {day:30, month:12, path:"/files/mensaje30.pdf", music:"7nzsY8vlnKdvGOEE0rjAXZ"},
    {day:31, month:12, path:"/files/mensaje31.pdf", music:"5RhWszHMSKzb7KiXk4Ae0M"}
]

export function getPdfForToday(): string {
  const today = new Date();
  const dayOfMonth = today.getDate();
  const pdfForToday = pdfRoutes.find(pdf => pdf.day === dayOfMonth);

  return pdfForToday ? pdfForToday.path : '/files/default.pdf';
}

export function getMusicForToday(): string {
    const today = new Date();
    const dayOfMonth = today.getDate();
    const musicForToday = pdfRoutes.find(pdf => pdf.day === dayOfMonth);
  
    return musicForToday ? musicForToday.music : '12M5uqx0ZuwkpLp5rJim1a';
  }