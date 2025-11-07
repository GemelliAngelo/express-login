const transporter = require("../utils/mailer");

async function sendMail(req, res) {
  const { to, subject, message } = req.body;

  if (!to || !subject || !message) {
    return res.status(400).json({ error: "Dati mancanti" });
  }

  try {
    const info = await transporter.sendMail({
      from: '"Test App" <noreply@testapp.com>',
      to,
      subject,
      text: message,
      html: `<p>${message}</p>`,
    });

    console.log("Email inviata:", info.messageId);
    res
      .status(200)
      .json({ message: "Email inviata con successo!", id: info.messageId });
  } catch (error) {
    console.error("Errore invio email:", error);
    res.status(500).json({ error: "Errore durante l’invio dell’email" });
  }
}

module.exports = { sendMail };
