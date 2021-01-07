<html>

    <body>
        
        <h4> Nova mensagem enviada pelo site henriquefantini.com </h4>
        <br/>
        <p>
        
            Nome: {{ $data['name'] }} <br/>
            Email {{ $data['mail'] }} <br/>
            Telefone: {{ $data['phone'] }}<br/>
            <br/>
            <br/>
            Assunto: {{ $data['subject'] }}<br/>
            Mensagem:<br/>
            <br/>
            {{ $data['message'] }}
        
        </p>

    </body>

</html>