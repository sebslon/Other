import {
  Button,
  ButtonGroup,
  Heading,
  Text,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

function Buy({ connectedContract }) {
  const toast = useToast();
  const [totalTicketCount, setTotalTicketCount] = useState(null);
  const [availableTicketsCount, setAvailableTicketsCount] = useState(null);
  const [buyTxnPending, setBuyTxnPending] = useState(false);

  const getAvailableTicketsCount = async () => {
    try {
      const count = await connectedContract.availableTicketsCount();
      setAvailableTicketsCount(count.toNumber());
    } catch (err) {
      console.log(err);
    }
  };

  const getTotalTicketsCount = async () => {
    try {
      const count = await connectedContract.totalTicketCount();
      setTotalTicketCount(count.toNumber());
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!connectedContract) return;

    getAvailableTicketsCount();
    getTotalTicketsCount();
  });

  const buyTicket = async () => {
    try {
      if (!connectedContract) return;

      setBuyTxnPending(true);
      const buyTxn = await connectedContract.mint({
        value: `${0.08 * 10 ** 18}`,
      });

      await buyTxn.wait();
      setBuyTxnPending(false);
      toast({
        title: "Success!",
        description: (
          <a
            href={`https://rinkeby.etherscan.io/tx/${buyTxn.hash}`}
            target="_blank"
            rel="nofollow noreferrer"
          >
            Checkout the transaction on Etherscan
          </a>
        ),
        status: "success",
        variant: "subtle",
      });
    } catch (err) {
      console.log(err);
      setBuyTxnPending(false);
      toast({
        title: "Failed.",
        description: err,
        status: "error",
        variant: "subtle",
      });
    }
  };

  return (
    <>
      <Heading mb={4}>DevDAO Conference 2022</Heading>
      <Text fontSize="xl" mb={4}>
        Connect your wallet to mint your NFT. It'll be your ticket to get in!
      </Text>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        margin="0 auto"
        maxW="140px"
      >
        <ButtonGroup mb={4}>
          <Button
            isLoading={buyTxnPending}
            onClick={buyTicket}
            loadingText="Pending"
            size="lg"
            colorScheme="teal"
          >
            Buy Ticket
          </Button>
        </ButtonGroup>
        {availableTicketsCount && totalTicketCount && (
          <Text>
            {availableTicketsCount} of {totalTicketCount} minted!
          </Text>
        )}
      </Flex>
    </>
  );
}

export default Buy;
