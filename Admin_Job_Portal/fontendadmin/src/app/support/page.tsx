"use client";

import { useState, useEffect } from "react";
import axios from "../utils/axios"; // ✅ adjust if needed

interface SupportMessage {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export default function SupportMessagePage() {
  const [messages, setMessages] = useState<SupportMessage[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchMessages = async () => {
    try {
      const res = await axios.get("/support-messages");
      setMessages(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch messages");
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!name || !email || !message) {
      setError("All fields are required");
      return;
    }
    setLoading(true);
    try {
      await axios.post("/support-messages", { name, email, message });
      setName("");
      setEmail("");
      setMessage("");
      fetchMessages();
    } catch (err) {
      console.error(err);
      setError("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-black">Support Messages</h1>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      {/* List of messages */}
      <div className="mb-8">
        {messages.length === 0 ? (
          <p>No messages yet.</p>
        ) : (
          <ul className="space-y-4">
            {messages.map((msg) => (
              <li
                key={msg.id}
                className="p-4 border rounded shadow-sm bg-white"
              >
                <p>
                  <strong>{msg.name}</strong> ({msg.email}) says:
                </p>
                <p className="mt-1">{msg.message}</p>
                <p className="text-sm text-black mt-1 ">
                  {new Date(msg.createdAt).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Form to send message */}
      <form onSubmit={handleSend} className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4 text-black">Send a Response</h2>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mb-4 w-full rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-4 w-full rounded"
          required
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border p-2 mb-4 w-full rounded resize-none"
          rows={4}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}
