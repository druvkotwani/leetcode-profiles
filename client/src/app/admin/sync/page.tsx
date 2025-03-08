"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AdminSync() {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [secretKey, setSecretKey] = useState("");
  const router = useRouter();

  const handleSyncAll = async () => {
    if (!secretKey) {
      setError("Secret key is required");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `/api/syncAllProfiles?secretKey=${secretKey}`
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to sync profiles");
      }

      setResults(data);
    } catch (err: any) {
      setError(err.message || "An error occurred while syncing profiles");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="px-4 lg:px-24 py-24 min-h-screen bg-[#0e0e0e] text-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Link href="/" className="mr-4">
            <Image
              src="/assets/icons/leetcode.svg"
              alt="Leetcode Logo"
              width={36}
              height={36}
            />
          </Link>
          <h1 className="text-3xl font-bold font-sourcecodepro">
            Admin: Profile Sync Tool
          </h1>
        </div>

        <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-700 mb-8">
          <h2 className="text-xl font-bold mb-4 font-sourcecodepro">
            Sync All LeetCode Profiles
          </h2>
          <p className="mb-6 text-gray-300">
            This will update all profiles with the latest data from LeetCode.
            This process may take several minutes depending on the number of
            profiles.
          </p>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Secret Key
            </label>
            <input
              type="password"
              value={secretKey}
              onChange={(e) => setSecretKey(e.target.value)}
              className="w-full p-2 bg-[#0e0e0e] border border-gray-700 rounded text-white"
              placeholder="Enter secret key"
            />
            {error && <p className="mt-2 text-red-500">{error}</p>}
          </div>

          <button
            onClick={handleSyncAll}
            disabled={isLoading}
            className={`px-4 py-2 rounded-md font-sourcecodepro font-bold ${
              isLoading
                ? "bg-gray-700 cursor-not-allowed"
                : "bg-gradient-to-r from-[#cb42b2] to-[#ecf576] text-black hover:opacity-90"
            } transition-all`}
          >
            {isLoading ? "Syncing..." : "Sync All Profiles"}
          </button>
        </div>

        {results && (
          <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-700">
            <h2 className="text-xl font-bold mb-4 font-sourcecodepro">
              Sync Results
            </h2>

            <div className="flex mb-4 gap-4">
              <div className="flex-1 p-4 bg-[#0e0e0e] rounded border border-gray-700">
                <div className="text-4xl font-bold mb-2 text-center">
                  {results.results.total}
                </div>
                <div className="text-center text-gray-300">Total Profiles</div>
              </div>
              <div className="flex-1 p-4 bg-[#0e0e0e] rounded border border-gray-700">
                <div className="text-4xl font-bold mb-2 text-center text-green-500">
                  {results.results.successful}
                </div>
                <div className="text-center text-gray-300">
                  Successfully Updated
                </div>
              </div>
              <div className="flex-1 p-4 bg-[#0e0e0e] rounded border border-gray-700">
                <div className="text-4xl font-bold mb-2 text-center text-red-500">
                  {results.results.failed}
                </div>
                <div className="text-center text-gray-300">Failed Updates</div>
              </div>
            </div>

            {results.results.failures.length > 0 && (
              <div>
                <h3 className="text-lg font-bold mb-2 font-sourcecodepro">
                  Failed Profiles:
                </h3>
                <ul className="list-disc pl-5 text-red-400">
                  {results.results.failures.map(
                    (username: string, idx: number) => (
                      <li key={idx}>{username}</li>
                    )
                  )}
                </ul>
              </div>
            )}

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => router.push("/")}
                className="px-4 py-2 bg-[#0e0e0e] text-white rounded-md border border-gray-700 hover:bg-[#1f1f1f] transition-all"
              >
                Back to Home
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
