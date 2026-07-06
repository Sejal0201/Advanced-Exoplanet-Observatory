from pathlib import Path

import plotly.graph_objects as go
import pandas as pd


class VisualizationService:

    def create_lightcurve(
        self,
        dataframe: pd.DataFrame,
        transits: dict,
        dataset_name: str,
    ):

        columns = [c.lower() for c in dataframe.columns]

        time_column = dataframe.columns[
            columns.index("time")
        ]

        flux_column = dataframe.columns[
            columns.index("flux")
        ]

        figure = go.Figure()

        figure.add_trace(
            go.Scatter(
                x=dataframe[time_column],
                y=dataframe[flux_column],
                mode="lines",
                name="Flux",
            )
        )

        if transits["candidate_count"] > 0:

            x = [
                point["time"]
                for point in transits["candidates"]
            ]

            y = [
                point["flux"]
                for point in transits["candidates"]
            ]

            figure.add_trace(
                go.Scatter(
                    x=x,
                    y=y,
                    mode="markers",
                    name="Transit Candidates",
                    marker=dict(
                        size=8,
                        color="red",
                    ),
                )
            )

        figure.update_layout(
            title=f"{dataset_name} Light Curve",

            xaxis_title="Time",

            yaxis_title="Normalized Flux",

            template="plotly_dark",
        )

        output_dir = Path(
            "uploads/plots"
        )

        output_dir.mkdir(
            parents=True,
            exist_ok=True,
        )

        output_file = output_dir / f"{dataset_name}.html"

        return figure.to_json()