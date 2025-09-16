export default async (req, res) => {
  const event = req.body;
  if (event.type === "checkout.session.completed") {
    const email = event.data.object.customer_email;
    // Auto-send prompt pack link
    // TODO: brancher sendgrid ou gmail API
    console.log(`✅ Pack envoyé à ${email}`);
  }
  res.status(200).json({received: true});
};
