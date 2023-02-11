# Project REST-Rant

REST-Rant is an app where users can review restaurants.

% Please add the following required packages to your document preamble:
% \usepackage[table,xcdraw]{xcolor}
% If you use beamer only pass "xcolor=table" option, i.e. \documentclass[xcolor=table]{beamer}
\begin{table}[]
\begin{tabular}{cll}
\hline
\multicolumn{1}{|c|}{Method} & \multicolumn{1}{c|}{Path} & \multicolumn{1}{c|}{Purpose} \\ \hline
\cellcolor[HTML]{FFFFFF}GET & \cellcolor[HTML]{FFFFFF}/ & Home page \\
\cellcolor[HTML]{FFFFFF}GET & \cellcolor[HTML]{FFFFFF}/places & Places index page \\
POST & /places & Create new place \\
GET & /places/new & Form page for creating a new place \\
GET & /places/:id & Details about a particular place \\
PUT & /places/:id & Update a particular place \\
\cellcolor[HTML]{FFFFFF}GET & \cellcolor[HTML]{FFFFFF}/places/:id/edit & Form page for editing an existing place \\
\cellcolor[HTML]{FFFFFF}DELETE & \cellcolor[HTML]{FFFFFF}/places/:id & Delete a particular place \\
\cellcolor[HTML]{FFFFFF}POST & \cellcolor[HTML]{FFFFFF}/places/:id/rant & Create a rant (comment) about a particular place \\
DELETE & \cellcolor[HTML]{FFFFFF}/places/:id/rant/:rantId & \cellcolor[HTML]{FFFFFF}Delete a rant (comment) about a particular place \\
GET & \* & 404 page (matches any route not defined above)  
\end{tabular}
\end{table}
