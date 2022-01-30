import { Button, ButtonGroup, Heading, Text, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function Buy({ connectedContract }) {
  const [totalTicketCount, setTotalTicketCount] = useState(null);
  const [availableTicketsCount, setAvailableTicketsCount] = useState(null);

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
  }, []);

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
          <Button loadingText="Pending" size="lg" colorScheme="teal">
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
