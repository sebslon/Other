import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Email } from '../../types';
import { API_URL, http } from '../../http';

const Email = () => {
  const [email, setEmail] = useState<null | Email>(null);
  const [ip, setIp] = useState<string>('');
  const [error, setError] = useState<null | unknown>(null);

  const router = useRouter();
  const { id } = router.query;

  async function fetchEmail() {
    try {
      await http.post(`/emails/${id}/visit`, {});

      const email = await http.get<Email>(`/emails/${id}`);

      if (email) setEmail(email);
    } catch (err) {
      setError(err);
    }
  }

  useEffect(() => {
    fetch('/api/ip')
      .then((res) => res.json())
      .then((res) => setIp(res.ip));
  });

  useEffect(() => {
    if (!id) return;
    fetchEmail();
  }, [id]);

  return (
    <>
      {email ? (
        <>
          <h1>Email nr. {email.id}</h1>
          <p>Total number of visits: {email.timesVisited}</p>
        </>
      ) : (
        <h1>Missing information for email nr. {id}</h1>
      )}
      {ip && <p>Your IP: {ip}</p>}
      {error && <p>{JSON.stringify(error)}</p>}
    </>
  );
};

export default Email;
