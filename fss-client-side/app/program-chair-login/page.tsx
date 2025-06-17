"use client";

import type React from "react";

import { useState } from "react";
import { Eye, EyeOff, User, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function ProgramChairLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password, rememberMe });
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Grid - Branding & Information */}
      <div
        className="relative lg:flex flex-col justify-center items-center p-8 text-white rounded-tr-3xl rounded-br-3xl hidden "
        style={{
          background: "linear-gradient(135deg, #BE152F 0%, #3A3838 100%)",
        }}
      ></div>

      {/* Right Grid - Login Form */}
      <div className="flex items-center justify-center p-8 bg-gray-50">
        <Card className="w-full max-w-md shadow-xl border-0 bg-white">
          <CardHeader className="text-center space-y-4 pb-6">
            <div>
              <CardTitle
                className="text-3xl font-bold"
                style={{ color: "#BE152F" }}
              >
                Program Chair Portal
              </CardTitle>
              <CardDescription className="text-gray-600 mt-2">
                Access is restricted to <b> program chairs </b> only.
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email Address
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="jdoe@ust.edu.ph"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12 border-gray-300 focus:border-[#BE152F] focus:ring-[#BE152F] text-base"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 h-12 border-gray-300 focus:border-[#BE152F] focus:ring-[#BE152F] text-base"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-12 px-3 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) =>
                      setRememberMe(checked as boolean)
                    }
                    className="data-[state=checked]:bg-[#BE152F] data-[state=checked]:border-[#BE152F]"
                  />
                  <Label htmlFor="remember" className="text-sm text-gray-600">
                    Remember me
                  </Label>
                </div>
                <Button
                  variant="link"
                  className="text-sm p-0 h-auto font-normal"
                  style={{ color: "#BE152F" }}
                >
                  Forgot password?
                </Button>
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-200 text-base"
                style={{
                  background: "linear-gradient(135deg, #BE152F, #3A3838)",
                }}
              >
                Login In
              </Button>

              <div className="text-center pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Need assistance?{" "}
                  <Button
                    variant="link"
                    className="text-sm p-0 h-auto font-normal"
                    style={{ color: "#BE152F" }}
                  >
                    Contact IT Support
                  </Button>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
