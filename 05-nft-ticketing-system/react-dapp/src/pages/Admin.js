import { Button, Flex, Heading, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";

function Admin({ isOwner, connectedContract }) {
  const [openSaleTxnPending, setOpenSaleTxnPending] = useState(false);
  const [closeSaleTxnPending, setCloseSaleTxnPending] = useState(false);
  const toast = useToast();

  const closeSale = async () => {
    try {
      if (!connectedContract) return;

      setCloseSaleTxnPending(true);
      let closeSaleTxn = await connectedContract.closeSale();

      await closeSaleTxn.wait();
      setCloseSaleTxnPending(false);

      toast({
        status: "Success",
        title: "Sale is closed!",
        variant: "subtle",
        description: (
          <a
            href={`https://rinkeby.etherscan.io/tx/${closeSaleTxn.hash}`}
            target="_blank"
            rel="nofollow noreferrer"
          >
            Checkout the transaction on Etherscan
          </a>
        ),
      });
    } catch (err) {
      console.log(err);
      setCloseSaleTxnPending(false);
      toast({
        title: "Failure",
        description: err,
        status: "error",
        variant: "subtle",
      });
    }
  };

  const openSale = async () => {
    try {
      if (!connectedContract) return;

      setOpenSaleTxnPending(true);
      let openSaleTxn = await connectedContract.openSale();

      await openSaleTxn.wait();
      setOpenSaleTxnPending(false);

      toast({
        status: "Success",
        title: "Sale is open!",
        variant: "subtle",
        description: (
          <a
            href={`https://rinkeby.etherscan.io/tx/${openSaleTxn.hash}`}
            target="_blank"
            rel="nofollow noreferrer"
          >
            Checkout the transaction on Etherscan
          </a>
        ),
      });
    } catch (err) {
      console.log(err);
      setOpenSaleTxnPending(false);
      toast({
        title: "Failure",
        description: err,
        status: "error",
        variant: "subtle",
      });
    }
  };

  return (
    <>
      <Heading mb={4}>Admin panel</Heading>
      <Text fontSize="xl" mb={8}>
        Enable and disable sales on the smart contract.
      </Text>
      <Flex width="100%" justifyContent="center">
        <Button
          isLoading={openSaleTxnPending}
          size="lg"
          colorScheme="teal"
          isDisabled={!isOwner || closeSaleTxnPending}
          onClick={openSale}
        >
          Open Sale
        </Button>
        <Button
          isLoading={closeSaleTxnPending}
          size="lg"
          colorScheme="red"
          variant="solid"
          marginLeft="24px"
          isDisabled={!isOwner || openSaleTxnPending}
          onClick={closeSale}
        >
          Close Sale
        </Button>
      </Flex>
    </>
  );
}

export default Admin;
