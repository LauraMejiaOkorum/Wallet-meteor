import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Modal } from "./components/Modal"
import TextField from '@mui/material/TextField';
import { ContactsCollection } from '../api/collections/ContactsCollection';
import { WalletsCollection } from '../api/collections/WalletsCollection';
import { useSubscribe, useFind } from 'meteor/react-meteor-data';
import { SelectContact } from './components/SelectContacts';

export const Wallet = () => {
    const isloadingWallets = useSubscribe("wallets");
    const isloadingContacts = useSubscribe("Contacts");
    const Contacts = useFind(() => ContactsCollection.find({ archived: { $ne: true } }, { sort: { createdat: -1 } }))
    const [wallet] = useFind(() => WalletsCollection.find({}))

    const [open, setOpen] = useState(false);
    const [isTransfering, setTransfering] = useState(false);
    const [amount, setAmount] = useState(0);
    const [destinationWallet, setDestinationWallet] = useState({});
    const [errorMessage, setError] = useState("");

    const addTransaction = () => {
        Meteor.call("transactions.insert", {
            isTransfering,
            sourceWalletId: wallet?._id,
            destinationWalletId: destinationWallet?.wallet || "",
            amount: Number(amount),
        }, (errorResponse) => {
            if (errorResponse) {
                if (errorResponse.details) {
                    errorResponse.details.forEach((error) => {
                        setError(error.message);
                    });
                } else {
                    setError(errorResponse.error);
                }
            } else {
                setOpen(false);
                setDestinationWallet({});
                setAmount(0);
                setError("");
            }
        }
        );
    };
    if (isloadingContacts() || isloadingWallets()) {
        return (
            <div>
                <h6 className='load'>Loading data...</h6>
            </div>)
    }
    return (
        <div>
            <Card sx={{ minWidth: 395 }}>
                <CardContent>
                    <Typography variant="h5" component={'div'}>
                        Main Account
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary" component={'div'}>
                        <strong>Wallet Id:</strong>
                        <br />
                        {wallet._id}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary" component={'div'}>
                        <strong>available balance: </strong>
                        {wallet.balance} {wallet.currency}
                    </Typography>
                    <CardActions>
                        <Button size="small" onClick={() => {
                            setTransfering(false);
                            setError("");
                            setOpen(true)

                        }} >Add money</Button>
                        <Button size="small" onClick={() => {
                            setTransfering(true);
                            setError("");
                            setOpen(true)
                        }}>Transfer money</Button>
                    </CardActions>
                </CardContent>
            </Card>
            <Modal
                open={open}
                setOpen={setOpen}
                title={
                    isTransfering ? "Transfer money to other wallet" : "Add money to your wallet"
                }
                body={<>
                    {isTransfering && (<div>
                        <SelectContact
                            contacts={Contacts}
                            contact={destinationWallet}
                            setContact={setDestinationWallet}
                        ></SelectContact>
                    </div>)}
                    <div>
                        <TextField
                            id="amount"
                            label="Amount"
                            type="number"
                            margin='dense'
                            value={amount}
                            fullWidth
                            size='small'
                            onChange={e => setAmount(e.target.value)}
                        />
                    </div>
                </>}
                footer={
                    <Button size="small" onClick={addTransaction}>{isTransfering ? "Transfer" : "add"}</Button>
                }
                errorMessage={errorMessage}
            >
            </Modal>
        </div>
    );
}