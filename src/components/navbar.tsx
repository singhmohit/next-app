"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
    const pathname = usePathname();

    if (pathname.startsWith('/product')) {
        return (
            <nav className="bg-black p-4 lg:px-48 ">
                <div className="flex gap-4 text-gray-100 text-lg">
                    <Link href="/">Home</Link>
                    {/* <Link href="/product">Product List</Link> */}
                    <Link href="#">Price List</Link>
                    {/* <Link href="/product-one">Product-one</Link> */}
                </div>
            </nav>
        )
    }
    return (
        <nav className="bg-blue-400 p-4 lg:px-48 ">
            <div className="flex gap-4 text-gray-100 text-lg">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/customer">Customer</Link>
                <Link href="/order">Order</Link>
                {/* <Link href="/product">Product</Link>
                <Link href="/product-one">Product-one</Link> */}
            </div>
        </nav>
    )
}