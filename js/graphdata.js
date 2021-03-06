$(document).ready(function() {
  $.ajax({
    url: "http://localhost.monitorbeta.com/rest/v1/getgraph",
    type: "GET",
    success: function(data) {
      //console.log(data);

      var timesubmited = [];
      var cpu_percentage = [];
      var ram_used = [];
      var ram_shared = [];
      var ram_available = [];
      var ram_buff = [];
			var swap_total = [];
      var swap_used = [];
			var total_hdd = [];
      var swap_free = [];
      var used_hdd = [];
      var available_hdd = [];
      var pid_running = [];
			var ram_total = []

      for (var i in data) {
        timesubmited.push(data[i].timesubmited);
        cpu_percentage.push(data[i].cpu_percentage);
        ram_used.push(data[i].ram_used);
        ram_shared.push(data[i].ram_shared);
        ram_available.push(data[i].ram_available);
        ram_buff.push(data[i].ram_buff);

				swap_total.push(data[i].swap_total);
        swap_used.push(data[i].swap_used);
        swap_free.push(data[i].swap_free);
				total_hdd.push(data[i].total_hdd);
        used_hdd.push(data[i].used_hdd);
        available_hdd.push(data[i].available_hdd);
        pid_running.push(data[i].pid_running);
				ram_total.push(data[i].ram_total)
      }

      var chartdata = {
        labels: timesubmited,
        datasets: [{
            label: "CPU Percentage",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(211, 72, 54, 0.75)",
            borderColor: "rgba(211, 72, 54, 1)",
            pointHoverBackgroundColor: "rgba(211, 72, 54, 1)",
            pointHoverBorderColor: "rgba(211, 72, 54, 1)",
            borderWidth: 5,
            data: cpu_percentage
          },
          {
            label: "RAM Used",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(29, 202, 255, 0.75)",
            borderColor: "rgba(29, 202, 255, 1)",
            pointHoverBackgroundColor: "rgba(29, 202, 255, 1)",
            pointHoverBorderColor: "rgba(29, 202, 255, 1)",
            borderWidth: 5,
            data: ram_used
          },
          {
            label: "RAM Shared",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(59, 89, 152, 0.75)",
            borderColor: "rgba(59, 89, 152, 1)",
            pointHoverBackgroundColor: "rgba(59, 89, 152, 1)",
            pointHoverBorderColor: "rgba(59, 89, 152, 1)",
            borderWidth: 5,
            data: ram_shared
          },
          {
            label: "RAM Available",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(184, 176, 15, 0.75)",
            borderColor: "rgba(184, 176, 15, 1)",
            pointHoverBackgroundColor: "rgba(184, 176, 15, 1)",
            pointHoverBorderColor: "rgba(184, 176, 15, 1)",
            borderWidth: 5,
            data: ram_available
          },
          {
            label: "RAM Buffered",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(184, 176, 15, 0.75)",
            borderColor: "rgba(184, 176, 15, 1)",
            pointHoverBackgroundColor: "rgba(184, 176, 15, 1)",
            pointHoverBorderColor: "rgba(184, 176, 15, 1)",
            borderWidth: 5,
            data: ram_buff
          },
          {
            label: "SWAP Used",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(184, 176, 15, 0.75)",
            borderColor: "rgba(184, 176, 15, 1)",
            pointHoverBackgroundColor: "rgba(184, 176, 15, 1)",
            pointHoverBorderColor: "rgba(184, 176, 15, 1)",
            borderWidth: 5,
            data: swap_used
          },
          {
            label: "SWAP Free",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(184, 176, 15, 0.75)",
            borderColor: "rgba(184, 176, 15, 1)",
            pointHoverBackgroundColor: "rgba(184, 176, 15, 1)",
            pointHoverBorderColor: "rgba(184, 176, 15, 1)",
            borderWidth: 5,
            data: swap_free
          },
          {
            label: "HDD Used",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(184, 176, 15, 0.75)",
            borderColor: "rgba(184, 176, 15, 1)",
            pointHoverBackgroundColor: "rgba(184, 176, 15, 1)",
            pointHoverBorderColor: "rgba(184, 176, 15, 1)",
            borderWidth: 5,
            data: used_hdd
          },
          {
            label: "HDD Free",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(184, 176, 15, 0.75)",
            borderColor: "rgba(184, 176, 15, 1)",
            pointHoverBackgroundColor: "rgba(184, 176, 15, 1)",
            pointHoverBorderColor: "rgba(184, 176, 15, 1)",
            borderWidth: 5,
            data: available_hdd
          },
          {
            label: "PID Running",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(184, 176, 15, 0.75)",
            borderColor: "rgba(184, 176, 15, 1)",
            pointHoverBackgroundColor: "rgba(184, 176, 15, 1)",
            pointHoverBorderColor: "rgba(184, 176, 15, 1)",
            borderWidth: 5,
            data: pid_running
          }
        ]
      };

      var cpudata = {
        labels: timesubmited,
        datasets: [{
          label: "CPU Percentage",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(211, 72, 54, 0.75)",
          borderColor: "rgba(211, 72, 54, 1)",
          pointHoverBackgroundColor: "rgba(211, 72, 54, 1)",
          pointHoverBorderColor: "rgba(211, 72, 54, 1)",
          borderWidth: 5,
          data: cpu_percentage
        }]
      };

			var ramdata = {
				labels: timesubmited,
				datasets: [
					{
						label: "RAM Used",
						fill: false,
						lineTension: 0.1,
						backgroundColor: "rgba(29, 202, 255, 0.75)",
						borderColor: "rgba(29, 202, 255, 1)",
						pointHoverBackgroundColor: "rgba(29, 202, 255, 1)",
						pointHoverBorderColor: "rgba(29, 202, 255, 1)",
						borderWidth: 5,
						data: ram_used
					},
					{
						label: "RAM Shared",
						fill: false,
						lineTension: 0.1,
						backgroundColor: "rgba(59, 89, 152, 0.75)",
						borderColor: "rgba(59, 89, 152, 1)",
						pointHoverBackgroundColor: "rgba(59, 89, 152, 1)",
						pointHoverBorderColor: "rgba(59, 89, 152, 1)",
						borderWidth: 5,
						data: ram_shared
					},
					{
						label: "RAM Available",
						fill: false,
						lineTension: 0.1,
						backgroundColor: "rgba(96, 75, 15, 0.75)",
						borderColor: "rgba(96, 75, 15, 1)",
						pointHoverBackgroundColor: "rgba(96, 75, 15, 1)",
						pointHoverBorderColor: "rgba(96, 75, 15, 1)",
						borderWidth: 5,
						data: ram_available
					},
					{
						label: "RAM Buffered",
						fill: false,
						lineTension: 0.1,
						backgroundColor: "rgba(35, 176, 15, 0.75)",
						borderColor: "rgba(35, 176, 15, 1)",
						pointHoverBackgroundColor: "rgba(35, 176, 15, 1)",
						pointHoverBorderColor: "rgba(35, 176, 15, 1)",
						borderWidth: 5,
						data: ram_buff
					}
				]
			};

			var swapdata = {
				labels: timesubmited,
				datasets: [
					{
						label: "SWAP Used",
						fill: false,
						lineTension: 0.1,
						backgroundColor: "rgba(59, 89, 152, 0.75)",
						borderColor: "rgba(59, 89, 152, 1)",
						pointHoverBackgroundColor: "rgba(59, 89, 152, 1)",
						pointHoverBorderColor: "rgba(59, 89, 152, 1)",
						borderWidth: 5,
						data: swap_used
					},
					{
						label: "SWAP Free",
						fill: false,
						lineTension: 0.1,
						backgroundColor: "rgba(96, 75, 15, 0.75)",
						borderColor: "rgba(96, 75, 15, 1)",
						pointHoverBackgroundColor: "rgba(96, 75, 15, 1)",
						pointHoverBorderColor: "rgba(96, 75, 15, 1)",
						borderWidth: 5,
						data: swap_free
					}
				]
			};

			var hdddata = {
				labels: timesubmited,
				datasets: [
					{
						label: "HDD Used",
						fill: false,
						lineTension: 0.1,
						backgroundColor: "rgba(59, 89, 152, 0.75)",
						borderColor: "rgba(59, 89, 152, 1)",
						pointHoverBackgroundColor: "rgba(59, 89, 152, 1)",
						pointHoverBorderColor: "rgba(59, 89, 152, 1)",
						borderWidth: 5,
						data: used_hdd
					},
					{
						label: "HDD Free",
						fill: false,
						lineTension: 0.1,
						backgroundColor: "rgba(96, 75, 15, 0.75)",
						borderColor: "rgba(96, 75, 15, 1)",
						pointHoverBackgroundColor: "rgba(96, 75, 15, 1)",
						pointHoverBorderColor: "rgba(96, 75, 15, 1)",
						borderWidth: 5,
						data: available_hdd
					}
				]
			};

			var piddata = {
				labels: timesubmited,
				datasets: [{
					label: "PIDs",
					fill: false,
					lineTension: 0.1,
					backgroundColor: "rgba(211, 72, 54, 0.75)",
					borderColor: "rgba(211, 72, 54, 1)",
					pointHoverBackgroundColor: "rgba(211, 72, 54, 1)",
					pointHoverBorderColor: "rgba(211, 72, 54, 1)",
					borderWidth: 5,
					data: pid_running
				}]
			};

      var cpu_ctx = $("#cpugraph");
			var ram_ctx = $("#ramgraph");
			var swap_ctx = $("#swapgraph");
			var hdd_ctx = $("#hddgraph");
			var pid_ctx = $("#pidgraph");

      var CpuGraph = new Chart(cpu_ctx, {
        type: 'line',
        data: cpudata,
        options: {
          scales: {
            yAxes: [{
              ticks: {
                min: 0,
                max: 100,
                callback: function(value) {
                  return value + "%"
                }
              },
              scaleLabel: {
                display: true,
                labelString: "Percentage"
              }
            }]
          }
        }
      });

			var RamGraph = new Chart(ram_ctx, {
        type: 'line',
        data: ramdata,
				options: {
					scales: {
						yAxes: [{
							ticks: {
								stepSize: 1,
								min: 0,
								max: Math.max.apply(Math, ram_total),
								callback: function(value){return value+ "GB"}
							},
							scaleLabel: {
								display: true,
								labelString: "Gigabytes"
							}
						}]
					}
				}
      });

			var SwapGraph = new Chart(swap_ctx, {
        type: 'line',
        data: swapdata,
				options: {
					scales: {
						yAxes: [{
							ticks: {
								stepSize: 1,
								min: 0,
								max: Math.max.apply(Math, swap_total),
								callback: function(value){return value+ "GB"}
							},
							scaleLabel: {
								display: true,
								labelString: "Gigabytes"
							}
						}]
					}
				}
      });

			var HddGraph = new Chart(hdd_ctx, {
        type: 'line',
        data: hdddata,
				options: {
					scales: {
						yAxes: [{
							ticks: {
								stepSize: 50,
								min: 0,
								max: Math.max.apply(Math, total_hdd),
								callback: function(value){return value+ "GB"}
							},
							scaleLabel: {
								display: true,
								labelString: "Gigabytes"
							}
						}]
					}
				}
      });

			var PidGraph = new Chart(pid_ctx, {
        type: 'line',
        data: piddata,
				options: {
					scales: {
						yAxes: [{
							ticks: {
								stepSize: 100,
								min: 0,
								max: Math.max.apply(Math, pid_running)+200
							},
							scaleLabel: {
								display: true,
								labelString: "Running PIDs"
							}
						}]
					}
				}
      });
    },
    error: function(data) {

    }
  });
});
