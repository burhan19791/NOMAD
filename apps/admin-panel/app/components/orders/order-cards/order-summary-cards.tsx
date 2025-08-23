'use client'

interface OrderSummaryCardProps {
  title: string
  mainText: string | number
  percentageText: string
  barLightColor: string // Tailwind class, e.g. "bg-purple-200"
  barDarkColor: string  // Tailwind class, e.g. "bg-purple-500"
  barFillPercentage: number // e.g. 65
}

export const OrderSummaryCard = ({
  title,
  mainText,
  percentageText,
  barLightColor,
  barDarkColor,
  barFillPercentage,
}: OrderSummaryCardProps) => {
  return (
    <div className="bg-card-background p-5 rounded-2xl flex justify-between">
      {/* Left Content */}
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-font-light text-sm mb-4">{title}</h2>
          <h1 className="text-3xl font-bold">{mainText}</h1>
        </div>
        <div className="text-xs text-success">{percentageText}</div>
      </div>

      {/* Right Bar */}
      <div className={`h-24 w-8 rounded flex flex-col-reverse ${barLightColor}`}>
        <div
          className={`${barDarkColor} rounded text-xs flex items-end justify-center text-white font-bold pb-3`}
          style={{ height: `${barFillPercentage}%` }}
        >
          {barFillPercentage}%
        </div>
      </div>
    </div>
  )
}
