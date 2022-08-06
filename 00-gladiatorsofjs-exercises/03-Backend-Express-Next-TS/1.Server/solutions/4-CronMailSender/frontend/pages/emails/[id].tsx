import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import styles from './Email.module.css';

import { http } from '../../http';
import { Email } from '../../types';

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

  async function toggleEmail() {
    try {
      await http.post(`/emails/${id}/toggle`, {});
      if (email) setEmail({ ...email, active: !email.active });
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
          <p>Active: {`${email.active}`}</p>
          <label className={styles.switch}>
            <input
              type='checkbox'
              checked={email.active}
              onChange={toggleEmail}
            />
            <span className={`${styles.slider} ${styles.round}`}></span>
          </label>
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
