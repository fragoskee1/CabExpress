import React, { useEffect } from 'react';
import * as echarts from 'echarts';

function BudgetChart() {
    useEffect(() => {
        echarts.init(document.querySelector('#budgetChart')).setOption({
            legend: {
                data: ['Allocated Budget', 'Actual Spending'],
            },
            radar: {
                shape: 'circle',
                indicator: [
                    {
                        name: 'sales',
                        max: 6500,
                    },
                    {
                        name: 'Administration',
                        max: 16000,
                    },
                    {
                        name: 'Information Technology',
                        max: 30000,
                    },
                    {
                        name: 'Customer Support',
                        max: 38000,
                    },
                    {
                        name: 'Development',
                        max: 52000,
                    },
                    {
                        name: 'Marketing',
                        max: 25000,
                    },
                ],
            },
            Series: [
                {
                    name: 'Budget vs Spending',
                    type: 'radar',
                    data: [
                        {
                            value: [4000, 5000, 6000, 7000, 8000, 9000],
                            name: 'Allocated Budget',
                        },
                        {
                            value: [5000, 6000, 7000, 8000, 9000, 10000],
                            name: 'Actual Spending',
                        },
                    ],
                },
            ],
        });
    }, []);

  return (
    <div id="budgetChart" style={{minHeight: '400px'}} className="echart">
    </div>
  );
}

export default BudgetChart
