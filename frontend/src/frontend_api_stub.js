// This is a tiny stub used inside the generated files to avoid build-time path issues.
// In the real repo, src/api.js exists and will be used. This stub is harmless.
export async function fetchMenu(){ return []; }
export async function createOrder(p){ return { orderId: Math.floor(Math.random()*10000) }; }
