"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import GenerateStats from "./components/GenerateStats";
import { useContext, useEffect, useState, useMemo } from "react";
import PromotionCard from "./components/PromotionCard";
import { DataContext } from "./context/DataContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Skeleton from "./components/Skeleton";
import Link from "next/link";

export default function Home() {
  const { datas, setDatas, search, setSearch } = useContext(DataContext);
  const [loading, setLoading] = useState(true);
  const [showStats, setShowStats] = useState(false);
  const [sortBy, setSortBy] = useState("default");
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    limit: 11,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce search input to avoid too many requests
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // Reset pagination when search changes
  useEffect(() => {
    setPagination((prev) => ({ ...prev, currentPage: 1 }));
  }, [debouncedSearch]);

  const fetchData = async (page = 1) => {
    try {
      setLoading(true);
      const queryParams = new URLSearchParams();

      if (debouncedSearch) {
        queryParams.append("search", debouncedSearch);
      }

      queryParams.append("page", page.toString());
      queryParams.append("limit", pagination.limit.toString());
      queryParams.append("sortBy", sortBy);

      const res = await fetch(`/api/fetchdata?${queryParams.toString()}`);
      const response = await res.json();

      setDatas(response.data);
      setPagination({
        currentPage: response.pagination.page,
        totalPages: response.pagination.totalPages,
        totalItems: response.pagination.total,
        limit: response.pagination.limit,
      });
      setLoading(false);
    } catch (error) {
      console.error("Error fetching messages:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(pagination.currentPage);
  }, [debouncedSearch, pagination.currentPage, pagination.limit, sortBy]);

  useEffect(() => {
    setTimeout(() => {
      setShowStats(true);
    }, 5000);
  }, []);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
    // Reset to first page when sorting changes
    setPagination((prev) => ({ ...prev, currentPage: 1 }));
  };

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= pagination.totalPages) {
      setPagination((prev) => ({ ...prev, currentPage: newPage }));
    }
  };

  return (
    <section className="px-4 lg:px-24 relative ">
      <button
        onClick={() => setShowStats((prevShowStats) => !prevShowStats)}
        className="transform transition-transform duration-300 hover:scale-125 z-50 fixed w-12 h-12 bottom-0 right-0 lg:right-3 m-4 sm:mr-6 lg:mr-4 rounded-md bg-[#0e0e0e] text-white hover:bg-[#292829] border border-gray-600 px-3 py-2 text-sm font-bold shadow-white animate"
      >
        <Image
          src="/assets/icons/leetcode.svg"
          alt="Leetcode Logo"
          width={36}
          height={36}
        />
      </button>

      <Navbar search={search} setSearch={setSearch} searchBarPresent={true} />

      <GenerateStats showStats={showStats} setShowStats={setShowStats} />

      <div className="w-full max-w-7xl mx-auto flex flex-col lg:grid grid-cols-3 items-center justify-start gap-4 lg:gap-12 px-8 mt-28">
        <div className="flex flex-wrap gap-4">
          <Link
            href="/worth"
            className="flex w-fit gap-2 rounded border-2 border-[#f7f7f7] px-4 bg-gradient-to-r from-[#cb42b2] to-[#ecf576] bg-clip-text text-transparent p-2 font-sourcecodepro font-bold"
          >
            <Image
              src="/assets/icons/money.svg"
              alt="Leetcode Logo"
              width={24}
              height={24}
            />
            LeetCode Worth
          </Link>
        </div>
        <select
          value={sortBy}
          onChange={handleSortChange}
          className="rounded border-2 border-[#f7f7f7] w-64 bg-[#0e0e0e] text-white p-2 font-sourcecodepro"
        >
          <option value="default">Sort By Default</option>
          <option value="question-solved">Sort By Questions Solved</option>
        </select>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/admin/sync"
            className="flex w-fit gap-2 rounded border-2 border-[#f7f7f7] px-4 bg-gradient-to-r from-[#3b82f6] to-[#22d3ee] bg-clip-text text-transparent p-2 font-sourcecodepro font-bold"
          >
            <Image
              src="/assets/icons/refresh.svg"
              alt="Sync Icon"
              width={24}
              height={24}
            />
            Sync Profiles
          </Link>
        </div>
      </div>

      <div className="mt-8  max-w-7xl mx-auto  place-items-center grid grid-cols-1 md:grid-cols-2 gap-y-8 xl:grid-cols-3 font-sourcecodepro gap-x-4">
        <PromotionCard />
        {loading ? (
          <>
            {Array.from({ length: 8 }, (_, i) => (
              <Skeleton key={i} />
            ))}
          </>
        ) : (
          datas?.map((userData: any, index: number) => (
            <Card
              userData={userData}
              index={index}
              key={userData._id || index}
            />
          ))
        )}
      </div>

      {/* Pagination Controls */}
      {!loading && pagination.totalPages > 1 && (
        <div className="flex justify-center mt-12 mb-16 max-w-7xl mx-auto">
          <div className="flex space-x-2 items-center font-sourcecodepro">
            <button
              onClick={() => handlePageChange(pagination.currentPage - 1)}
              disabled={pagination.currentPage === 1}
              className="px-4 py-2 rounded-md border border-gray-600 bg-[#0e0e0e] text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            <div className="flex space-x-2">
              {Array.from(
                { length: Math.min(5, pagination.totalPages) },
                (_, i) => {
                  // Show 5 pages around current page
                  let pageNum = 1;
                  if (pagination.totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (pagination.currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (
                    pagination.currentPage >=
                    pagination.totalPages - 2
                  ) {
                    pageNum = pagination.totalPages - 4 + i;
                  } else {
                    pageNum = pagination.currentPage - 2 + i;
                  }

                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-10 h-10 rounded-md ${
                        pagination.currentPage === pageNum
                          ? "bg-gradient-to-r from-[#cb42b2] to-[#ecf576] text-black font-bold"
                          : "border border-gray-600 bg-[#0e0e0e] text-white"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                }
              )}
            </div>

            <button
              onClick={() => handlePageChange(pagination.currentPage + 1)}
              disabled={pagination.currentPage === pagination.totalPages}
              className="px-4 py-2 rounded-md border border-gray-600 bg-[#0e0e0e] text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      )}

      <Footer />

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
}
