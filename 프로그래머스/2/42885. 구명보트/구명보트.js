function solution(people, limit) {
    var answer = 0;
    people.sort ((a,b) => b-a) // 오름차순으로 정리한다 (왼쪽이 큰 수, 오른쪽이 작은 수) 
    for (var i=0, j= people.length - 1; i <=j ; i++ ) { 
        /* i는 왼쪽, j는 오른쪽으로 정한다.
         여기서 i와 j가 서로 반대 위치가 될 때까지 반복한다.*/
        if (people[i] + people [j] <= limit ) // i번 사람의 무게 + j번 사람의 무게가 무게 제한보다 작다면
            j-- // j를 뺀다. (제한을 넘을 경우 i번 사람만 탈 수 있게 된다. 몸무게가 무겁기 때문이다.)
        answer ++ // 보트 갯수를 추가한다. 어차피 보트는 2명밖에 타지 못하니 탈 때마다 보트가 늘어난다.
    }
    return answer;
}