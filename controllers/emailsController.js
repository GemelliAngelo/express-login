const transporter = require("../utils/mailer");

async function sendMail(req, res) {
  const { to, subject, message } = req.body;

  if (!to || !subject || !message) {
    return res.status(400).json({ error: "Dati mancanti" });
  }

  const info = await transporter.sendMail({
    from: '"Test App" <noreply@testapp.com>',
    to,
    subject,
    text: message,
    html: `<p>${message}</p>`,
  });

  res
    .status(200)
    .json({ message: "Email inviata con successo!", id: info.messageId });
}

module.exports = { sendMail };
