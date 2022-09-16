import React from "react";
import {Bar} from 'react-chartjs-2'
import {useSelector} from 'react-redux'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    ArcElement,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    ArcElement,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const Chart = ()=>{
    const items = useSelector(state=> state.items)
    return(
        <div className="chart">
            <Bar
                data={{
                    // labels: ['Broccoli', 'Tomato', 'Cabbage'],
                    labels:items.map(item=> item.itemName),
                    datasets:[{
                        label: 'Inventory 2022',
                        data: items.map(item=>item.quantity),
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(204, 244, 123, 0.2)',
                            'rgba(6, 0, 0, 0.2)',
                            'rgba(224, 0, 184, 0.2)',
                            'rgba(176, 102, 184, 0.2)',
                            'rgba(53, 191, 208, 0.2)',
                            'rgba(255, 118, 0, 0.2)',
                            'rgba(255, 118, 255, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(204, 244, 123, 1)',
                            'rgba(6, 0, 0, 1)',
                            'rgba(224, 0, 184, 1)',
                            'rgba(176, 102, 184, 1)',
                            'rgba(53, 191, 208, 1)',
                            'rgba(255, 118, 0, 1)',
                            'rgba(255, 118, 255, 1)'
                        ],
                        borderWidth: 1
                    }]
                }}
            />
        </div>
    )
  }

  export default Chart