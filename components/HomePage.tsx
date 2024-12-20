'use client'

import { database } from '@/lib/data'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, Line, LineChart, Pie, PieChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export default function HomePage() {
  const { analytics } = database

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard Analytics</h1>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.totalBookings}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${analytics.totalRevenue.toLocaleString()}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Occupancy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.averageOccupancy}%</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customer Satisfaction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.customerSatisfaction}/5</div>
          </CardContent>
        </Card>
      </div>

      {/* Bookings by Month Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Bookings by Month</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              bookings: {
                label: "Bookings",
                color: "hsl(var(--chart-1))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={analytics.bookingsByMonth}>
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="bookings" stroke="var(--color-bookings)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Revenue by Quarter Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue by Quarter</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              revenue: {
                label: "Revenue",
                color: "hsl(var(--chart-2))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={analytics.revenueByQuarter}>
                <XAxis dataKey="quarter" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="revenue" fill="var(--color-revenue)" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Top Performing Camps */}
      <Card>
        <CardHeader>
          <CardTitle>Top Performing Camps</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {analytics.topPerformingCamps.map((camp, index) => (
              <div key={index} className="flex items-center">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">{camp.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {camp.bookings} bookings, ${camp.revenue.toLocaleString()} revenue
                  </p>
                </div>
                <div className="ml-auto font-medium">{((camp.revenue / analytics.totalRevenue) * 100).toFixed(1)}%</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Customer Feedback Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Customer Feedback</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              rating: {
                label: "Rating",
                color: "hsl(var(--chart-3))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={analytics.customerFeedback}
                  dataKey="rating"
                  nameKey="category"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="var(--color-rating)"
                  label
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}

