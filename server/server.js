// Stripe backend for payment handling

const express = require('express') 
const path = require('path') 
const cors = require('cors')
const Stripe = require('stripe')

if(process.env.NODE_ENV !== 'production') require('dotenv').config({path:__dirname + '/.env'})

const apiKey = process.env.STRIPE_SECRET_KEY


const stripe = Stripe(apiKey)


const app = express()
const port = process.env.PORT || 4000;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

if(process.env.NODE_ENV === 'production'){
    // in production, use the foldere client/build for the static files
    app.use(express.static(path.join(__dirname, 'client/build')))

    // send the index.html to all routes when in production
    app.get('*', function(req, res){
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    })
}

// when route payment
app.post('/payment', async (req, res) => {
  const body = {
      source: req.body.token.id,
      amount:req.body.amount,
      currency:'cad'
}  


// creates charges for payment
await stripe.charges.create(body, (stripeErr, stripeRes) =>{
      if(stripeErr){
          res.status(500).send({error:stripeErr})
      }else{
          res.status(200).send({success :stripeRes})
      }
  })
})

app.listen(port, err => {
    if(err) throw err;
    console.log('Server running on port ' + port)
})
