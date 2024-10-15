import React from 'react'
import PropTypes from 'prop-types'

export default function Home(props) {
  let myStyle={
    color:props.mode==='dark'?'white':'black',
    fontSize:'100px',
    fontWeight:'bold',

  }
  return (
    <div style={myStyle}>
      <center>{props.heading}</center>
    </div>
  )
}

Home.propTypes={
    heading:PropTypes.string
}




// import React from 'react'
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { IndianRupee, PieChart, TrendingUp, User, Menu } from "lucide-react"

// export default function HomePage() {
//   return (
//     <div className="flex flex-col h-screen bg-orange-50 text-black">
//       {/* App Header */}
//       <header className="flex justify-between items-center p-4 bg-orange-500 text-white">
//         <div className="flex items-center space-x-2">
//           <IndianRupee className="h-6 w-6" />
//           <span className="font-bold text-lg">WEALTHMATE</span>
//         </div>
//         <div className="flex items-center space-x-4">
//           <User className="h-6 w-6" />
//           <Menu className="h-6 w-6" />
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="flex-1 overflow-y-auto">
//         {/* Welcome Section */}
//         <section className="p-4">
//           <h1 className="text-2xl font-bold mb-2">Welcome, User!</h1>
//           <p className="text-orange-700 mb-4">Let's manage your finances today.</p>
//           <Card className="bg-orange-100 mb-4">
//             <CardHeader>
//               <CardTitle className="text-lg text-orange-800">Total Balance</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-3xl font-bold text-orange-600">₹50,000</p>
//             </CardContent>
//           </Card>
//           <div className="grid grid-cols-2 gap-4">
//             <Button className="w-full bg-orange-500 text-white hover:bg-orange-600">Add Income</Button>
//             <Button className="w-full bg-orange-500 text-white hover:bg-orange-600">Add Expense</Button>
//           </div>
//         </section>

//         {/* Features Tabs */}
//         <Tabs defaultValue="budget" className="w-full">
//           <TabsList className="grid w-full grid-cols-3 bg-orange-200">
//             <TabsTrigger value="budget" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">Budget</TabsTrigger>
//             <TabsTrigger value="goals" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">Goals</TabsTrigger>
//             <TabsTrigger value="invest" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">Invest</TabsTrigger>
//           </TabsList>
//           <TabsContent value="budget" className="p-4">
//             <Card className="bg-white">
//               <CardHeader>
//                 <CardTitle className="flex items-center text-orange-600">
//                   <PieChart className="h-5 w-5 mr-2" />
//                   Smart Budgeting
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-sm text-black">
//                   Create and manage your budgets with ease. Get insights into your spending habits and save more.
//                 </p>
//               </CardContent>
//             </Card>
//           </TabsContent>
//           <TabsContent value="goals" className="p-4">
//             <Card className="bg-white">
//               <CardHeader>
//                 <CardTitle className="flex items-center text-orange-600">
//                   <TrendingUp className="h-5 w-5 mr-2" />
//                   Goal Tracking
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-sm text-black">
//                   Set financial goals and track your progress. Whether it's saving for a vacation or buying a home, we've got you covered.
//                 </p>
//               </CardContent>
//             </Card>
//           </TabsContent>
//           <TabsContent value="invest" className="p-4">
//             <Card className="bg-white">
//               <CardHeader>
//                 <CardTitle className="flex items-center text-orange-600">
//                   <IndianRupee className="h-5 w-5 mr-2" />
//                   Investment Insights
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-sm text-black">
//                   Get personalized investment recommendations and track your portfolio performance in real-time.
//                 </p>
//               </CardContent>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       </main>

//       {/* App Navigation */}
//       <nav className="flex justify-around items-center p-4 bg-orange-500 text-white">
//         <Button variant="ghost" className="flex flex-col items-center hover:bg-orange-600">
//           <PieChart className="h-6 w-6" />
//           <span className="text-xs">Budget</span>
//         </Button>
//         <Button variant="ghost" className="flex flex-col items-center hover:bg-orange-600">
//           <TrendingUp className="h-6 w-6" />
//           <span className="text-xs">Goals</span>
//         </Button>
//         <Button variant="ghost" className="flex flex-col items-center hover:bg-orange-600">
//           <IndianRupee className="h-6 w-6" />
//           <span className="text-xs">Invest</span>
//         </Button>
//       </nav>
//     </div>
//   )
// }