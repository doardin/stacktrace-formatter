function formatStackTrace() {
    var stacktrace = document.getElementById("stacktrace").value;

    // Separa as linhas do stack trace
    var lines = stacktrace.split("\n");

    // Filtra as linhas que contêm "br.com."
    var filteredLines = lines.filter(function(line) {
        return line.includes("br.com.");
    });

    // Monta o novo stack trace apenas com as linhas que contêm "br.com."
    var formattedStacktrace = filteredLines.map(function(line) {
        // Aplica a cor vermelha aos arquivos .java
        var highlightedLine = line.replace(/(at .*?)([^\(\)]+\.(java))(:\d+\))/g, '$1<span class="file" style="color: red">$2$3</span>$4');
        return highlightedLine;
    }).join("\n");

    document.getElementById("formatted-stacktrace").innerHTML = formattedStacktrace;
}