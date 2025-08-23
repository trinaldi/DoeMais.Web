import { useState, useEffect } from "react";
import type { Donation } from "@/components/Donation/DonationCard";
import { BASE_URL } from "@/utils/config";

export function useDonations() {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    fetch(`${BASE_URL}/Donation`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar doações");
        return res.json();
      })
      .then((json) => {
        if (json.type === 0) {
          setDonations(json.data);
        }
        setError(json.message)
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { donations, loading, error };
}
