const express = require('express') 
const path = require('path') 
const cors = require('cors')
const Stripe = require('stripe')

if(process.env.NODE_ENV !== 'production') require('dotenv').config()

const apiKey = process.env.STRIPE_SECRET_KEY

const stripe = Stripe(apiKey)


const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'client/build')))

    app.get('*', function(req, res){
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    })

}

app.listen(port, err => {
    if(err) throw err;
    console.log('Server running on port ' + port)
})

app.post('/payment', async (req, res) => {
  const body = {
      source: req.body.token.id,
      amount:req.body.amount,
      currency:'cad'
  }  
await stripe.charges.create(body, (stripeErr, stripeRes) =>{
    console.log(stripeErr)
      if(stripeErr){
          res.status(500).send({error:stripeErr})
      }else{
          res.status(200).send({success :stripeRes})
      }
  })
})