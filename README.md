<div align="center">
    <img title="" src="assets/images/RedactedMrZango.png" alt="Mr Zango Image" data-align="center" width="400">
</div>

# Zano BaZaar - The Decentralized Marketplace

Zano BaZaar is built on Zano and utilizes Zano's Marketplace API, there is little to no centralization on BaZaar and all offers are contained on the Zano Blockchain itself.

**NOTE: This document is a work in progress and will be continually updated as features are added and battle tested in the wild!**

# Cost and usage

To Help combat spam vendor signups, a small, reasonable ZANO cost has been implemented to sign up a basic BaZaar Vendor. There are 3 Vendor tiers: 'basic', 'enhanced' and 'featured' with varying degrees of functionality.

Be aware, this document is a work in progress and will be continuously updated as features are added and has been tested more in the wild!

## Tier: "Featured - 100 $ZANO

The Featured Tier will provide full current and future functionality, some features include:

- Featured on the front page above the fold

- Custom URL

- Rating system

- Edit vendor Title and Description

- Display vendors twitter, discord, telegram and github links and email contact

## Tier: "Enhanced - 50 $ZANO

The Enhanced tier will provide elevated functionality from the basic account, some features include:

- Edit vendor Title and Description

- Display vendors twitter, discord, telegram and github links and email contact

## Tier: "Basic"" - 20 $ZANO

The Basic account is quick and dirty, and has minimal functionality

- Display email contact on vendor page

**NOTE: Tier costs and feature are subject to change as features are added**

## Usage - vendor sign up

Signing up as a vendor is quick and easy, to get started, follow these steps:

## Step one:

Navigate to the [vendor registration page](https://zanobazaar.com/register/) and generate your link:

<div align="left">
    <img title="" src="assets/images/register.png" alt="Mr Zango Image" data-align="center" width="700">
</div>

Once your link is generated, copy it and head over to your [Zano Wallet](https://zano.org/downloads) to set up your vendor account.

## IPFS Images

The BaZaar likes people to use IPFS for uploading images, so currently only use IPFS for images or they wont be visable, using IPFS is really easy with [IPFS desktop](https://docs.ipfs.tech/install/ipfs-desktop/).

### Get IPFS Desktop

Head to your package manager or to the [IPFS Desktop Download page](https://docs.ipfs.tech/install/ipfs-desktop/), once you've installed it, fire it up and upload your import to IPFS as follows:

<div align="left">
    <img title="" src="assets/images/ipfs.png" alt="Mr Zango Image" data-align="center" width="700">
</div>

#### _Firstly_

_Navigate to files (left hand section of IPFS Desktop GUI)_

#### _Then:_

_click import and select image_

#### _FInally_

_click the 3 dots and copy the CID, you then use this CID when creating your offer._

## Step 2:

Fire up your [Zano Wallet](https://zano.org/downloads) and copy/paste your generated link into the comments section:

<div align="left">
    <img title="" src="assets/images/signup.png" alt="Mr Zango Image" data-align="center" width="700">
</div>

The amount you send dictates which account Tier is set up, this process is automated and cant be undone so make sure you send the correct amount. See the above price Costs and account Tiers section.

### Address:

Now send your transaction to the BaZaars address:

**ZxCH88NJ8sc5hs7eZ813BafmEUY7P1p8V4rEa9KndjWAbMNburuqnwXHruYRfwmqY6LF8fbhK8u7vXAusQYWSpiV1o8KS7X5h**

OR

**Alias: @bazaar** 

## Congratulations, your BaZaar is set up!

Once the transaction is confirmed on the blockchain, your BaZaar will be visibile and youll be able to log in.

**NOTE: if you didnt set up a featured BaZaar, you'll have to keep an eye on the [Blockchain Explorer](https://explorer.zano.org) to check whether the Blockchain has confirmed your transaction, otherwise you'll see the BaZaar appear on the front page 'Featured Vendors' section.**

# Logging in

In order to login you will need the hash of the transaction you sent when setting up your BaZaar, and your secret that you generated and sent within the comments, these act as a username and password if you will.

## Getting the Transaction hash

Simply fire up your wallet, and click on the transaction to the BaZaar and copy (click) the hash. Your hash is secured by the blockchain, completely private and visible to nobody (besides the sender and receiver)

<div align="left">
    <img title="" src="assets/images/hash.png" alt="Mr Zango Image" data-align="center" width="700">
</div>

# Go explore

Nice, you've set up your BaZaar, now go and explore your account and get selling stuffs!

# How to POST offers to the Blockchain

Currently there is no simple GUI to post offers to the blockchain, this functionality should be included within the net wallet update, however I will be developing a simple one which will be with us soon.

In the mean time, I personally use a program called [Insomnia](https://insomnia.rest/download) which allows you to send POST requests, its really easy.

In order to use insomnia, you need to be using CLI daemon and wallet, I wont go in depth on how to get those set up, but you can find an easy to follow guide [here](https://docs.zano.org/docs/install-a-zano-cli-wallet-ubuntu)

![Mr Zango Image](assets/images/post.png)

Take a look at the above [marketplace offer struccture](https://docs.zano.org/reference/marketplace-offer-structure-and-description), the Bazaar pretty much follows the strcture laid out by Zano.

**NOTE: The Bazaar utilizes the "url" parameter for the product IPFS image CID and the "do" parameter as your receive address**

# Remember, you're early!

Zano BaZaar is in its infancy, so make sure to report any issues, suggestions or ideas, you can do this over on [Telegram](https://t.me/ZanoBazaar) or just head over to [Zano's Discord](https://discord.com/invite/wE3rmYY) server where you can usually find me (kekzploit).

# Donating to the BaZaar and wider Zano ecosystem

zAnons, if you appreciate the work going into enriching the zano ecosystem and attempts to further Zano's cause, feel free to ping across a donation, it makes the late nights worth it and helps towards dev time and ongoing hosting fees which.

Appreciate you guys!

## Zano donation address:

ZxDNaMeZjwCjnHuU5gUNyrP1pM3U5vckbakzzV6dEHyDYeCpW8XGLBFTshcaY8LkG9RQn7FsQx8w2JeJzJwPwuDm2NfixPAXf 
