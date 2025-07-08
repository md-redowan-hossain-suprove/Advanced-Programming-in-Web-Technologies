"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "../Component/Sidebar";
import axios from "../utils/axios";

interface Complaint {
  id: number;
  clientName: string;
  message: string;
  reply?: string;
}

export default function ComplainsPage() {
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [loading, setLoading] = useState(true);
  const [replyText, setReplyText] = useState<{ [key: number]: string }>({});

 useEffect(() => {
  axios.get('/complaints')
    .then(res => {
      console.log('✅ Complaints fetched:', res.data);
      setComplaints(res.data);
    })
    .catch(err => console.error('❌ Error fetching complaints:', err))
    .finally(() => setLoading(false));
}, []);


  const handleReply = async (id: number) => {
    if (!replyText[id]) return;
    try {
      await axios.patch(`/complaints/${id}/reply`, { reply: replyText[id] });
      setComplaints(prev =>
        prev.map(c => c.id === id ? { ...c, reply: replyText[id] } : c)
      );
      setReplyText(prev => ({ ...prev, [id]: "" }));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6 text-black">Client Complaints</h1>

        {loading ? (
          <p>Loading complaints...</p>
        ) : (
          <div className="bg-white rounded shadow p-6">
            <table className="min-w-full text-left">
              <thead className="border-b text-gray-700">
                <tr>
                  <th className="pb-3">Client Name</th>
                  <th className="pb-3">Complaint Message</th>
                  <th className="pb-3">Reply</th>
                  <th className="pb-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {complaints.map((complaint) => (
                  <tr key={complaint.id} className="border-t">
                    <td className="py-3 font-medium text-gray-800">{complaint.clientName}</td>
                    <td className="py-3 text-gray-700">{complaint.message}</td>
                    <td className="py-3 text-gray-700">
                      {complaint.reply ? complaint.reply : (
                        <input
                          type="text"
                          value={replyText[complaint.id] || ""}
                          onChange={e => setReplyText(prev => ({ ...prev, [complaint.id]: e.target.value }))}
                          className="border rounded px-2 py-1 w-full"
                          placeholder="Write a reply"
                        />
                      )}
                    </td>
                    <td className="py-3 text-gray-700">
                      {!complaint.reply && (
                        <button
                          onClick={() => handleReply(complaint.id)}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                        >
                          Reply
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
