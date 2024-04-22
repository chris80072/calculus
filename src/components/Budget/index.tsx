import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { useTranslation } from 'next-i18next'
import React, { useState } from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import { Pie } from 'react-chartjs-2'
import { Budget as BudgetType } from './types'

interface Props {}

ChartJS.register(ArcElement, Tooltip, Legend)

const Budget: React.FC<Props> = () => {
  const [budgetTypes, setBudgetTypes] = useState<BudgetType[]>([
    { type: 'food', amount: 1 },
    { type: 'clothing', amount: 1 },
    { type: 'housing', amount: 0 },
    { type: 'transportation', amount: 0 },
  ])

  const { t } = useTranslation('common')

  const data = {
    labels: budgetTypes.map((b) => t(b.type)),
    datasets: [
      {
        label: '# of Votes',
        data: budgetTypes.map((b) => b.amount),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  return (
    <div style={{ height: '600px' }}>
      <Pie
        data={data}
        width={400}
        height={400}
        options={{ maintainAspectRatio: false, responsive: true }}
      />
      <>
        {budgetTypes.map((budgetType, index) => (
          <InputGroup key={index} className="mb-3">
            <InputGroup.Text
              id="inputGroup-{budgetType.type}"
              style={{ width: 120 }}
            >
              {t(budgetType.type)}
            </InputGroup.Text>
            <Form.Control
              aria-label="{budgetType.type}"
              aria-describedby="inputGroup-{budgetType.type}"
              type="number"
              value={budgetType.amount}
              onChange={(e) => {
                const newBudgetTypes = [...budgetTypes]
                const newValue = parseInt(e.target.value) || 0
                newBudgetTypes[index].amount = newValue < 0 ? 0 : newValue
                setBudgetTypes(newBudgetTypes)
              }}
              style={{ textAlign: 'right' }}
            />
          </InputGroup>
        ))}
      </>
    </div>
  )
}

export default Budget
