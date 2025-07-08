"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "../Component/Sidebar";
import axios from "../utils/axios";

interface Notice {
  id: number;
  title: string;
  content: string;
}

export default function NoticePage() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);
  const [editNoticeId, setEditNoticeId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  const fetchNotices = async () => {
    try {
      const res = await axios.get("/notice");
      setNotices(res.data);
    } catch (err) {
      console.error("Error fetching notices:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);
  
  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`/notice/${id}`);
      fetchNotices();
    } catch (err) {
      console.error("Error deleting notice:", err);
    }
  };

  const handleUpdate = async (id: number) => {
    try {
      await axios.patch(`/notice/${id}`, {
        title: editTitle,
        content: editContent,
      });
      setEditNoticeId(null);
      fetchNotices();
    } catch (err) {
      console.error("Error updating notice:", err);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6 text-black">Notice Board</h1>

        {loading ? (
          <p className="text-black">Loading notices...</p>
        ) : (
          <div className="bg-white rounded shadow p-6 overflow-x-auto">
            <table className="min-w-full text-left">
              <thead className="border-b text-black">
                <tr>
                  <th className="pb-3">ID</th>
                  <th className="pb-3">Title</th>
                  <th className="pb-3">Content</th>
                  <th className="pb-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {notices.map((notice) => (
                  <tr key={notice.id} className="border-t">
                    <td className="py-3 text-black">{notice.id}</td>
                    <td className="py-3 text-black">
                      {editNoticeId === notice.id ? (
                        <input
                          type="text"
                          value={editTitle}
                          onChange={(e) => setEditTitle(e.target.value)}
                          className="border rounded px-2 py-1 w-full text-black"
                        />
                      ) : (
                        notice.title
                      )}
                    </td>
                    <td className="py-3 text-black">
                      {editNoticeId === notice.id ? (
                        <input
                          type="text"
                          value={editContent}
                          onChange={(e) => setEditContent(e.target.value)}
                          className="border rounded px-2 py-1 w-full text-black"
                        />
                      ) : (
                        notice.content
                      )}
                    </td>
                    <td className="py-3 space-x-2">
                      {editNoticeId === notice.id ? (
                        <button
                          onClick={() => handleUpdate(notice.id)}
                          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setEditNoticeId(notice.id);
                            setEditTitle(notice.title);
                            setEditContent(notice.content);
                          }}
                          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                        >
                          Edit
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(notice.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
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
