import sharp from "sharp";
const glyph = await sharp("public/images/logo.webp").extract({ left: 38, top: 4, width: 100, height: 104 }).toBuffer();
const big = await sharp(glyph).resize({ width: 400, height: 400, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();
await sharp({ create: { width: 512, height: 512, channels: 4, background: "#11100f" } }).composite([{ input: big, gravity: "center" }]).png().toFile("src/app/icon.png");
const small = await sharp(glyph).resize({ width: 130, height: 130, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();
await sharp({ create: { width: 180, height: 180, channels: 4, background: "#11100f" } }).composite([{ input: small, gravity: "center" }]).png().toFile("src/app/apple-icon.png");
console.log("icons ok");
