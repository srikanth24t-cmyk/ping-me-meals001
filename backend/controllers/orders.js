const pool = require('../db');

exports.getMenu = async (req, res) => {
  try {
    const r = await pool.query('SELECT id, name, description, price, category FROM menu WHERE is_active=true ORDER BY id');
    res.json(r.rows);
  } catch (e) {
    console.error(e); res.status(500).json({ error: 'db error' });
  }
};

exports.createOrder = async (req, res) => {
  const { name, phone, items, delivery_addr, note } = req.body;
  if (!phone || !items || items.length === 0) return res.status(400).json({ error: 'missing' });
  try {
    await pool.query('BEGIN');
    const orderRes = await pool.query(
      `INSERT INTO orders (customer_name, phone, delivery_address, note, status, created_at)
       VALUES ($1,$2,$3,$4,'pending',NOW()) RETURNING id`,
      [name || 'Guest', phone, delivery_addr || '', note || '']
    );
    const orderId = orderRes.rows[0].id;
    for (const it of items) {
      await pool.query('INSERT INTO order_items (order_id, menu_id, qty) VALUES ($1,$2,$3)', [orderId, it.menu_id, it.qty]);
    }
    await pool.query('COMMIT');
    res.json({ orderId, status: 'created' });
  } catch (err) {
    await pool.query('ROLLBACK');
    console.error(err);
    res.status(500).json({ error: 'server error' });
  }
};

exports.whatsappWebhook = async (req, res) => {
  // simple placeholder for Twilio webhook handling
  res.send('<Response></Response>');
};
